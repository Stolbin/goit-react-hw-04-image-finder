import { useState, useEffect } from 'react';
import { getImages } from 'api/api-servises';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import { Button } from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import { FcUp } from "react-icons/fc";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Conteiner,
  ErrorText,
  SpanText,
  ArrowUP,
  ArrowUPLink,
  Anchor,
} from './App.styled';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    setIsLoading(true);
    getImages(query, page)
      .then(({ hits, totalHits }) => {
        if (!hits?.length) {
          setIsEmpty(true);
          return;
        }
        setImages(images => [...images, ...hits]);
        if (page === 1) {
          toast.success(`We find ${totalHits} results for your query`);
        }
        if (page > 1 && page >= Math.ceil(totalHits / 12)) {
          setShowBtn(false);
          return toast.info(
            "We're sorry, but you've reached the end of search results."
          );
        }
        setShowBtn(page < Math.ceil(totalHits / 12));
        return;
      })
      .catch(() => toast.error(`Something went wrong! Please try again later!`))
      .finally(() => setIsLoading(false));
  }, [page, query]);

  const handleFormSubmit = searcQquery => {
    if (query === searcQquery) {
      return toast.warn(
        'Your current request is already displayed now. Enter a new query'
      );
    } else {
      setQuery(searcQquery);
    }
    setImages([]);
    setPage(1);
    setShowBtn(false);
    setIsEmpty(false);
    setIsLoading(false);
  };

  const onLoadMore = () => {
    setPage(page => page + 1);
  };

  return (
    <Conteiner>
      <Searchbar onSubmit={handleFormSubmit} />
      <Anchor id="header"></Anchor>
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {(showBtn && <Button onClick={onLoadMore} />) ||
        (isEmpty && (
          <ErrorText>
            There are no pictures with the name <SpanText>{query}</SpanText> in
            our database, try another request!
          </ErrorText>
        ))}
      <ToastContainer autoClose={2000} />
      <ArrowUP type="button">
        <ArrowUPLink href="#header">
        <FcUp style={{ width: 24, height: 24 }} />
        </ArrowUPLink>
      </ArrowUP>
    </Conteiner>
  );
};

export default App;

// class App extends Component {
//   state = {
//     query: '',
//     images: [],
//     showModal: false,
//   };

//   async componentDidUpdate(_, prevState) {
//     const { query, page } = this.state;
//     if (query !== prevState.query || page !== prevState.page) {
//       try {
//         this.setState({ isLoading: true });
//         const { hits, totalHits } = await getImages(query, page);
//         console.log(hits);
//         if (!hits?.length) {
//           this.setState({ isEmpty: true });
//           return;
//         }
//         this.setState(prevState => ({
//           images: prevState.images.concat(hits),
//           showBtn: page < Math.ceil(totalHits / 12),
//         }));
//       } catch {
//         this.setState({ isError: errorMessages.noImages });
//       } finally {
//         this.setState({ isLoading: false });
//       }
//     }
//   }

//   handleFormSubmit = query => {
//     this.setState({
//       query,
//       images: [],
//       page: 1,
//       isEmpty: false,
//       showBtn: false,
//       isLoading: false,
//       isError: null,
//     });
//   };

//   onLoadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   render() {
//     const { images, isEmpty, query, showBtn, isError, isLoading } = this.state;
//     return (
//       <Conteiner>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <ImageGallery images={images} />
//         {isLoading && <Loader />}
//         {(showBtn && <Button onClick={this.onLoadMore} />) ||
//           (isEmpty && (
//             <ErrorText>
//               There are no pictures with the name <SpanText>{query} </SpanText>
//               in our database, try another request!
//             </ErrorText>
//           ))}
//         {isError && <h2>{isError}</h2>}
//       </Conteiner>
//     );
//   }
// }

// export default App;
