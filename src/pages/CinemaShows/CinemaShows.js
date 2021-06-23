import React from "react";
import {useSelector} from "react-redux";
import {Tabs} from "antd";
import _ from "lodash";
export default function CinemaShows(props) {
  const {showTimeByCinema} = useSelector((state) => state.CinemaReducer);
  // const showTime = showTimeByCinema[0];
  // console.log("shpw", showTime);
  const {TabPane} = Tabs;
  return showTimeByCinema ? (
    <div className="my-24">
      <Tabs tabPosition="left">
        {showTimeByCinema[0].lstCumRap.map((item, index) => {
          return (
            <TabPane
              tab={
                <div className="text-center">
                  {" "}
                  <p className="mb-0 font-bold">{item.tenCumRap}</p>
                  <img
                    src={item.hinhAnh}
                    alt=""
                    className="rounded-full w-10 h-10 mx-auto"
                  />
                  <p>
                    {item.diaChi.length > 35
                      ? item.diaChi.slice(0, 35) + "..."
                      : item.diaChi}
                  </p>
                </div>
              }
              key={index}>
              {_.map(item.danhSachPhim, (movie, index) => {
                return (
                  <div
                    key={index}
                    className="flex border px-5 py-8"
                    style={{boxShadow: "0px 0px 10px 0px #b6b6b3"}}>
                    <div className="movie-tab-picture flex">
                      <img
                        src={movie.hinhAnh}
                        // className="w-28 h-28 rounded-full"
                        style={{
                          minWidth: "214px",
                          height: "318px",
                          boxShadow: "0px 0px 10px 0px #353535",
                        }}
                        alt=""
                        onError={(event) => {
                          // console.log(event.target.currentSrc);
                          event.target.src = "https://picsum.photos/200/200";
                        }}
                      />
                    </div>
                    <div
                      className="movie-showtime flex ml-5 flex-wrap"
                      style={{flexDirection: "column"}}>
                      <div>
                        <p className="mb-5 font-semibold text-3xl">
                          {movie.tenPhim}
                        </p>
                        <p className="text-xl font-bold">
                          {showTimeByCinema[0].tenHeThongRap}
                        </p>
                      </div>

                      <div
                        style={{
                          flexDirection: "row",
                          display: "flex",
                          flexWrap: "wrap",
                        }}>
                        {_.map(
                          movie.lstLichChieuTheoPhim.slice(0, 10),
                          (item, index) => {
                            return (
                              <div
                                key={index}
                                className="mr-5 py-3 px-5 bg-gray-200 w-72 cursor-pointer border-red-600 mb-5 "
                                style={{borderLeftWidth: "20px"}}
                                onClick={() => {
                                  props.history.push(
                                    `cinemaDetail/${item.maLichChieu}`
                                  );
                                }}>
                                <div className="flex justify-between">
                                  <span>Original </span>
                                  <span
                                    className="bg-red-600 p-1 text-white"
                                    style={{
                                      transform: "translate(20px, -10px)",
                                    }}>
                                    SAVER
                                  </span>
                                </div>
                                <div className="text-2xl">
                                  {item.ngayChieuGioChieu.slice(11, 16)}
                                </div>
                              </div>
                              // <p
                              //   key={index}
                              //   className="px-5 py-2 border-2 mr-2 text-2xl">
                              //   {item.ngayChieuGioChieu.slice(11, 16)}
                              // </p>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  ) : (
    <div className="loading">
      <img
        src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
        alt=""
      />
    </div>
  );
}
