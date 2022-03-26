import React, { useEffect } from "react";
import { FilterMobileCard } from "components";
import { useSelector, useDispatch } from "react-redux";
import { getLatestMobiles } from "../redux/actions/mobileActions";
import { baseURL } from "api/baseURL";

const LeftSideMenuCards = () => {
  const { latestMobile } = useSelector((state) => state.mobileReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLatestMobiles());
  }, []);

  const leftMenu = [
    {
      title: "Latest Mobiles",
      products: [
        {
          item: latestMobile[0],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[0].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[0].brandName} ${latestMobile[0].modelNumber}`,
        },
        {
          item: latestMobile[1],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[1].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[1].brandName} ${latestMobile[1].modelNumber}`,
        },
        {
          item: latestMobile[2],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[2].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[2].brandName} ${latestMobile[2].modelNumber}`,
        },
        {
          item: latestMobile[3],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[3].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[3].brandName} ${latestMobile[3].modelNumber}`,
        },
        {
          item: latestMobile[4],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[4].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[4].brandName} ${latestMobile[4].modelNumber}`,
        },
        {
          item: latestMobile[5],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[5].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[5].brandName} ${latestMobile[5].modelNumber}`,
        },
      ],
    },
    {
      title: "Top 6 By Fans",
      products: [
        {
          item: latestMobile[0],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[0].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[0].brandName} ${latestMobile[0].modelNumber}`,
        },
        {
          item: latestMobile[1],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[1].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[1].brandName} ${latestMobile[1].modelNumber}`,
        },
        {
          item: latestMobile[2],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[2].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[2].brandName} ${latestMobile[2].modelNumber}`,
        },
        {
          item: latestMobile[3],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[3].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[3].brandName} ${latestMobile[3].modelNumber}`,
        },
        {
          item: latestMobile[4],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[4].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[4].brandName} ${latestMobile[4].modelNumber}`,
        },
        {
          item: latestMobile[5],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[5].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1
              ? null
              : `${latestMobile[5].brandName} ${latestMobile[5].modelNumber}`,
        },
      ],
    },

    {
      title: "Top 10 Compaines",
      products: [
        {
          item: latestMobile[0],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[0].mobilePhotos[0]}`,
          name: latestMobile.length < 1 ? null : `${latestMobile[0].brandName}`,
        },
        {
          item: latestMobile[1],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[1].mobilePhotos[0]}`,
          name: latestMobile.length < 1 ? null : `${latestMobile[1].brandName}`,
        },
        {
          item: latestMobile[2],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[2].mobilePhotos[0]}`,
          name:
            latestMobile.length < 1 ? null : `${latestMobile[2].brandName} `,
        },
        {
          item: latestMobile[3],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[3].mobilePhotos[0]}`,
          name: latestMobile.length < 1 ? null : `${latestMobile[3].brandName}`,
        },
        {
          item: latestMobile[4],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[4].mobilePhotos[0]}`,
          name: latestMobile.length < 1 ? null : `${latestMobile[4].brandName}`,
        },
        {
          item: latestMobile[5],
          src:
            latestMobile.length < 1
              ? null
              : `${baseURL}${latestMobile[5].mobilePhotos[0]}`,
          name: latestMobile.length < 1 ? null : `${latestMobile[5].brandName}`,
        },
      ],
    },
  ];
  return (
    <>
      {leftMenu.map(({ title, products }) => {
        return <FilterMobileCard title={title} products={products} />;
      })}
    </>
  );
};

export default LeftSideMenuCards;
