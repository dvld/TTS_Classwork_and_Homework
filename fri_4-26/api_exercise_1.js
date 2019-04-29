// http://jsonplaceholder.typicode.com
// console.log("connect")
$(document).ready(() => {

  // let post_area = $('#post_area');

  // let posts_to_page = () => {
  //   post_area
  // }
  // get all posts
  $('#get_posts').click(() => {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        for (let i = 0; i < json.length; i++) {
          $('post_area').add('p').css( "background-color", "red" ); // json[i].body
          
          console.log(json);
        }
      });
  });

  // get post 10
  $('#get_post_10').click(function () {
    $.get('http://jsonplaceholder.typicode.com/posts/10', function (data) {
      console.log(data);
    });
  });

  // get post 12 comments
  $('#get_comments_from_12').click(function () {
    $.get('http://jsonplaceholder.typicode.com/comments?postId=12', function (data) {
      console.log(data);
    });
  });

  // all posts from 2
  $('#get_all_posts_from_user_2').click(function () {
    $.get('http://jsonplaceholder.typicode.com/posts?userId=2', function (data) {
      console.log(data);
    });
  });

  // new post
  $('#new_post').click(function () {
    $.post('http://jsonplaceholder.typicode.com/posts', {
      userId: 1,
      title: 'this is a new post',
      body: 'this is the body of the post'
    }, function (data) {
      console.log(data.id);
    });
  });

  // replace
  $('#replace_with_12_render_json').click(function () {
    fetch('http://jsonplaceholder.typicode.com/posts/12', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'this is another new post',
        body: 'nobody',
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(res => res.json())
      .then(json => console.log(json));
  });

  // update
  $('#update_title_with_12_render_json').click(function () {
    fetch('http://jsonplaceholder.typicode.com/posts/12', {
      method: 'PATCH',
      body: JSON.stringify({
        title: 'new title'
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(res => res.json())
      .then(json => console.log(json));
  });

  // delete
  $('#delete_with_12_render_success').click(function () {
    fetch('http://jsonplaceholder.typicode.com/posts/12', {
      method: 'DELETE'
    });
  });

  // display all comments
  $('#display_all_comments').click(function () {
    fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'GET'
    });
  });

});