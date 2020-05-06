import React, { Component } from 'react'
import PostList from './PostList'
import CreatePost from './CreatePost'
import QuestionList from './QuestionList'

class Home extends Component {
    render() {
      return (
        <div class="cf">
            <div class="fl w-100 w-25-ns">
                <div class="pa1 br3 bg-light-gray tc avenir">
                    <a class="f5 link dim br-pill ph2 pv2 mb2 dib gray bg-light-gray" href="#0">Q & A</a>
                    <a class="f5 link dim br-pill ph2 pv2 mb2 dib green bg-light-gray b" href="#0"> Posts </a>
                </div>
            </div>
            <div class="fl w-100 w-50-ns w-75-m">
                <div class="bg-white tr">
                <CreatePost></CreatePost>
                <br></br>
                <PostList></PostList>
                <br></br>
                <QuestionList></QuestionList>
                </div>
            </div>
            <div class="fl w-100 w-25-ns dn-m">
                <div class="pa1 br3 bg-light-gray tc avenir">
                    <a class="f5 link dim br-pill ph2 pv2 mb2 dib green bg-light-gray b" href="#0">Followers</a>
                    <a class="f5 link dim br-pill ph2 pv2 mb2 dib gray bg-light-gray" href="#0">Discover</a>
                </div>
            </div>
        </div>
      )
    }
  }

  export default Home