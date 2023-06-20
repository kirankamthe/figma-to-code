// src/pages/Home.js

import React, { useEffect, useState } from "react";
import {
  // fetchFigmaFileMetadata,
  fetchFigmaNodeById,
  // fetchFigmaFileComponents,
} from "../utils/figmaAPI";
import data from "../utils/data.json";
import { generateComponents } from "../utils/componentGenerator";

const Home = () => {
  const [nodeDesignData, setNodeDesignData] = useState(null);
  const [generatedComponents, setGeneratedComponents] = useState([]);

  useEffect(() => {
    if (data?.document) setGeneratedComponents(generateComponents(data));
  }, [data]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const FIGMA_FILE_ID = process.env.REACT_APP_FIGMA_FILE_ID;
  //     const FIGMA_USER_KEY = process.env.REACT_APP_FIGMA_USER_TOKEN;
  //     const FIGMA_NODE_ID = process.env.REACT_APP_FIGMA_NODE_ID;
  //     try {
  //       const nodesMetadata = await fetchFigmaNodeById(
  //         FIGMA_FILE_ID,
  //         FIGMA_USER_KEY,
  //         FIGMA_NODE_ID
  //       );
  //       setNodeDesignData(
  //         nodesMetadata?.nodes?.[FIGMA_NODE_ID.replace("-", ":")]
  //       );
  //     } catch (error) {
  //       console.error("Error fetching Figma data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  console.log("nodeDesignData", nodeDesignData);

  console.log("nodeDesignData", generatedComponents);

  return (
    <div>
      {/* Render your generated components */}
      <div>hiiiii</div>
      {/* {generatedComponents?.map((Component, index) => (
        <Component key={index} />
      ))} */}
    </div>
  );
};

export default Home;
