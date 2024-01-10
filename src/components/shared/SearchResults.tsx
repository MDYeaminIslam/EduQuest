import { Models } from 'appwrite';
import { GridPostList, Loader } from '.';

// type DocumentList<Document = Models.Document> = {
//   total: number;
//   documents: Document[];
// };

type SearchResultProps = {
  isSearchFetching: boolean;
  searchedPosts: any;
};
const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResultProps) => {
  if (isSearchFetching) {
    return <Loader />;
  } else if (searchedPosts && searchedPosts.documents && searchedPosts.documents.length > 0) {
    return <GridPostList posts={searchedPosts.documents as Models.Document[]} />; 
  } else {
    return (
      <p className="text-light-4 mt-10 text-center w-full">No results found</p>
    );
  }
};
export default SearchResults