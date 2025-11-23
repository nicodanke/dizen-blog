import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './i18n';

// Pages
import HomePage from "./pages/Home.jsx";
import PostsPage from "./pages/Posts.jsx";
import FeaturedPostsPage from "./pages/FeaturedPosts.jsx";
import AboutPage from "./pages/About.jsx";

import BlogPost from './components/BlogPost/BlogPost';

import * as serviceWorker from "./serviceWorker";
import { AnimatePresence } from "framer-motion";
import { GlobalStyle } from "./components/StyledComponents/StyledComponents.jsx";
import { ThemeContextProvider } from "./contexts/ThemeContext";

import Posts from '../src/posts/Posts';

// Google Analytics
import ReactGA from "react-ga";

class App extends Component {

    render() {

        if (window.location.hostname !== "localhost") {

            // Google Analytics ID goes here.
            let trackingId = "123";

            ReactGA.initialize(trackingId);
            ReactGA.pageview('/blog');
        }


        return (
            <ThemeContextProvider>
                <GlobalStyle />
                <BrowserRouter basename="/blog">
                    <AnimatePresence>
                        <Switch>
                            <Route exact path="/">
                                <HomePage />
                            </Route>

                            <Route exact path="/posts">
                                <PostsPage />
                            </Route>

                            <Route path="/featured-posts">
                                <FeaturedPostsPage />
                            </Route>

                            <Route path="/about">
                                <AboutPage />
                            </Route>

                            {Posts.map((post, index) => {
                                return (
                                    <Route key={index} path={`/posts/${post.route}`}>
                                        <BlogPost />
                                    </Route>
                                )
                            })}
                            <Redirect from="/" to="/" />
                        </Switch>
                    </AnimatePresence>
                </BrowserRouter>
            </ThemeContextProvider>
        )
    }
}

serviceWorker.unregister();
ReactDOM.render(<App />, document.getElementById('root'))
