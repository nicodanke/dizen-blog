import React from 'react';
import { Button } from '../StyledComponents/StyledComponents';

const PrimaryButton = (props) => {
    // If it's an external link, use as-is
    if (props.route && props.route.startsWith('http')) {
        return (
            <a href={props.route} target={props.newTab ? '_blank' : null}>
                <Button color={props.color} onClick={props.onClick} type={props.submit ? "submit" : "button"} right={props.right ? true : false} left={props.left ? true : false}>
                    {
                        props.left
                            ?
                            <i className="las la-arrow-left"></i>
                            :
                            null
                    }
                    <span>{props.text}</span>
                    {
                        props.right
                            ?
                            <i className={`las la-${props.newTab ? 'level-up-alt' : 'arrow-right'}`}></i>
                            :
                            null
                    }
                </Button>
            </a>
        );
    }

    // For internal routes, prepend /blog prefix
    // Post routes (without /posts/) should go to /blog/posts/route
    let route = '/blog';
    if (props.route) {
        if (props.route.startsWith('/blog')) {
            route = props.route;
        } else if (props.route.startsWith('/posts/')) {
            route = `/blog${props.route}`;
        } else if (props.route.startsWith('/posts') || props.route.startsWith('/featured-posts') || props.route.startsWith('/about')) {
            route = `/blog${props.route}`;
        } else if (props.route.startsWith('/')) {
            // Other routes starting with / (like /home)
            route = `/blog${props.route}`;
        } else {
            // Post routes without prefix (like "cool-blog-post") should go to /blog/posts/cool-blog-post
            route = `/blog/posts/${props.route}`;
        }
    }

    return (
        <a href={route} target={props.newTab ? '_blank' : null}>
            <Button color={props.color} onClick={props.onClick} type={props.submit ? "submit" : "button"} right={props.right ? true : false} left={props.left ? true : false}>
                {
                    props.left
                        ?
                        <i className="las la-arrow-left"></i>
                        :
                        null
                }
                <span>{props.text}</span>
                {
                    props.right
                        ?
                        <i className={`las la-${props.newTab ? 'level-up-alt' : 'arrow-right'}`}></i>
                        :
                        null
                }
            </Button>
        </a>
    )
}

export default PrimaryButton;
