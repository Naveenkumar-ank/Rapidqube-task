import React, { useEffect, useState } from "react";
import BaseService from "../../services/service";
import HomePresentational from "./home-presentational";

const HomeFunctional = () => {
  const [dataOdd, setDataOdd] = useState([]);
  const [dataEven, setDataEven] = useState([]);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = () => {
    BaseService.getUserList()
      .then((res) => {
        console.log({ res });
        if (res.data && res.data.length > 0) {
          let response = res.data || [];
          setDataEven([...(response.filter((_, ind) => ind % 2 == 0) || [])]);
          setDataOdd([...(response.filter((_, ind) => ind % 2 != 0) || [])]);
        } else {
          setDataOdd([]);
          setDataEven([]);
        }
      })
      .catch(() => {
        setDataOdd([]);
        setDataEven([]);
      });
  };

  return <HomePresentational setDataOdd={setDataOdd} setDataEven={setDataEven} dataOdd={dataOdd} dataEven={dataEven} />;
};

export default HomeFunctional;
