import { types, flow, getRoot } from "mobx-state-tree";
import { handleApiRequest } from "services/api/apiMethods";
import { BASE_URL_HELPDESK } from "config/constants";
import { API_METHODS, snakeToCamelCaseObjectFormatter } from "common";
import { DropdownOptions } from "../client-details/clientDetails";

const exampleItem = types.model("exampleItem", {
 
  exampleTitle: types.optional(types.maybeNull(types.string), ""),
  status: types.optional(types.maybeNull(types.number), 0),
  createdAt: types.optional(types.maybeNull(types.string), ""), // Optional string
  updatedAt: types.optional(types.maybeNull(types.string), ""), // Optional string
});

const example = types
  .model("example", {
    example: types.optional(types.array(exampleItem), []),
    exampleDropdownOptions: types.optional(types.array(DropdownOptions), []),
  })
  .actions((self) => ({
    getexample: flow(function* getexample() {
      const { viewStore } = getRoot(self);
      const { apiStatusStore } = viewStore;
      const { setIsLoadingStatus } = apiStatusStore;

      try {
        const url = `${BASE_URL_HELPDESK}get_example`;
        setIsLoadingStatus("getexample", false, false, true);
        const response = yield handleApiRequest({
          method: API_METHODS.GET,
          url,
        });
        const formattedData = snakeToCamelCaseObjectFormatter(response.data);
        self.example = formattedData;
        self.exampleDropdownOptions = self.example.map((item) => ({
          value: item.titleId,
          title: item.jobTitle,
        }));
        console.info("Get job titles list API data fetched successfully");
        setIsLoadingStatus("getexample", false, true, false);
      } catch (error) {
        console.error("Error in get job titles list API", error);
        setIsLoadingStatus("getexample", true, false, false);
        return error;
      }
    }),
  }));

export default example;
