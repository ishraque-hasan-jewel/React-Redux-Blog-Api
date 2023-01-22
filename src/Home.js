import React from 'react'
import './App.css'
//import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
// const Router = ReactRouterDOM.BrowserRouter;
// const Route = ReactRouterDOM.Route;
// const Switch = ReactRouterDOM.Switch;
// const Link = ReactRouterDOM.Link;
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container pt-3">
          <div className="row">
            <Link to="/lorem-ipsum-dolor-sit-amet-consectetur">
              <article className="best-post">
                <div
                  className="best-post-image"
                  style={{
                    backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/projects/404/396f5591178321.Y3JvcCwxMjk0LDEwMTIsMCwzODQ.png")`
                  }}
                ></div>
                <div className="best-post-content">
                  <div className="best-post-content-cat">videograper</div>
                  <div className="best-post-content-title">
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                  <div className="best-post-content-sub">
                    Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                    kullanılan taklit yazı bloğu olarak tanımlanır. Lipsum,
                    oluşturulacak şablon ve taslaklarda içerik yerine geçerek yazı
                    bloğunu doldurmak için kullanılır.
                  </div>
                </div>
              </article>
            </Link>
            <Link to="/lorem-ipsum-dolor-sit-amet-consectetur">
              <article className="post__card-2">
                <div className="post__card_-2">
                  <div
                  
                    className="post__card__image-2"
                    style={{
                      backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ad9cb894970549.5e8f28eecdea8.jpg")`
                    }}
                  >
                    <h2>Post</h2>
                  </div>
                  <div>
                    <div className="post__card_meta-2">
                      <div className="post__card_cat">youtube</div>
                      <p className="post__card_title-2">Lorem ipsum dolor sit</p>
                      <p className="post__card_alttitle-2">
                        Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                        kullanılan...
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
            <Link to="/lorem-ipsum-dolor-sit">
              <article className="post__card-2">
                <div className="post__card_-2">
                  <div
                    className="post__card__image-2"
                    style={{
                      backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7fa56a51087311.5a227b15ad57a.jpg")`
                    }}
                  >
                    <h2>Comment</h2>
                  </div>
                  <div>
                    <div className="post__card_meta-2">
                      <div className="post__card_cat">youtube</div>
                      <p className="post__card_title-2">Lorem ipsum dolor sit</p>
                      <p className="post__card_alttitle-2">
                        Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                        kullanılan...
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
            <Link to="/lorem-ipsum-dolor-sit-jewel">
              <article className="post__card-2">
                <div className="post__card_-2">
                  <div
                    className="post__card__image-2"
                    style={{
                      backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7c8a1e90624231.5e997520e9b9b.jpg")`
                    }}
                  >
                    <h2>Users</h2>
                  </div>

                  <div>
                    <div className="post__card_meta-2">
                      <div className="post__card_cat">youtube</div>
                      <p className="post__card_title-2">Lorem ipsum dolor sit</p>
                      <p className="post__card_alttitle-2">
                        Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                        kullanılan...
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      );
    }
    export default Home
  