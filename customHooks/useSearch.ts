import { useConnector } from "react-instantsearch-hooks-web";
import { SearchBox } from "react-instantsearch-dom";
type Props = {};

export function useMyWidget(props: Props) {
  return useConnector(SearchBox, props);
}
