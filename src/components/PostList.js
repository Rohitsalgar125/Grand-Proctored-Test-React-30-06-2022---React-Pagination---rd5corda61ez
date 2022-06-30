import React from "react";
import { Post } from "./Post";
import { useEffect, useState } from "react";
import {PaginationButtonsList} from './PaginationButtonsList';

const PostList = (props) => {
  const [postData, setPostData] = useState(null);

  const pageNo = props.pageNo;
  const setPageNo = props.setPageNo;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNo}&_limit=5`
      );
      const jsonRes = await response.json();
      console.log(jsonRes);
      setPostData(jsonRes);
    };
    fetchPosts();
  }, [pageNo]);

  return (
    <>
    {
        postData==null?(
            <div id="loader" className="loader">
                loading
            </div>
        ):(
            postData.map((post)=>{
                return <Post
                id={post.id}
                key={post.id}
                title={post.title}
                body={post.body}
              />
            })
        )
    }
    <PaginationButtonsList pageNo={pageNo} setPageNo={setPageNo}/>
    </>
  );
};

export { PostList };
