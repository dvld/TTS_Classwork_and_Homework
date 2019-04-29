$(() => {

  let post_area = $('#post_area');

  // get all posts and print them on the page
  $('#get_posts').click(() => {
    post_area.empty();
    // console.log('Clicked');
    $.get('http://jsonplaceholder.typicode.com/posts', posts => {
      posts.forEach(post => {

        // 
        let title = $('<h2 class="post_title"></h2>');
        title.text(post.title);
        post_area.append(title);

        // 
        let body = $('<p class="post_body"></p>');
        body.text(post.body);
        post_area.append(body);
        // console.log(post);
        // console.log(post.title);
        // console.log(title);
      });
    });
  });

  $('#get_post_10').click(() => {
    post_area.empty();
    console.log('Clicked');
    $.get('http://jsonplaceholder.typicode.com/posts/10', post => {

      // 
      let title = $('<h2 class="post_title"></h2>');
      title.text(post.title);
      post_area.append(title);

      // 
      let body = $('<p class="post_body"></p>');
      body.text(post.body);
      post_area.append(body);
      // console.log(post);
      // console.log(post.title);
      // console.log(title);
    });
  });

  $('#get_comments_from_12').click(() => {
    post_area.empty(); 
    console.log('clicked');
    $.get('http://jsonplaceholder.typicode.com/comments?postId=12', comments => {
      comments.forEach(comment => {
        console.log(comment);

        // comment title
        let comment_title = $('<h4 class="comment_title"></h4>');
        comment_title.text(comment.name);
        post_area.append(comment_title);

        // comment author
        let comment_author = $('<h5 class="comment_author"></h5>');
        comment_author.text(comment.email);
        post_area.append(comment_author);

        // comment body
        let comment_body = $('<p class="comment_body"></p>');
        comment_body.text(comment.body);
        post_area.append(comment_body);
      });
    });
  });

  $('#get_all_posts_from_user_2').click(() => {
    post_area.empty();
    console.log('clicked');
    $.get('http://jsonplaceholder.typicode.com/posts?userId=2', posts => {
      posts.forEach(post => {
        console.log(post);

        // 
        let user_post_title = $('<h2 class="post_title"></h2>');
        user_post_title.text(post.title);
        post_area.append(user_post_title);

        // 
        let user_post_body = $('<p class="post_body"></p>');
        user_post_body.text(post.body);
        post_area.append(user_post_body);
      });
    });
  });

  $('#new_post').click(() => {
    post_area.empty();
    console.log('clicked');
    $.post('http://jsonplaceholder.typicode.com/posts', {
      userId: 1,
      title: 'This is a new post',
      body: 'This is the body of the post'
    }, data => {
      console.log(data);

      // 
      let new_post_title = $('<h2 class="post_title"></h2>');
      new_post_title.text(data.title);
      post_area.append(new_post_title);
      
      // 
      let new_post_body = $('<p class="post_body"></p>');
      new_post_body.text(data.body);
      post_area.append(new_post_body);
    });
  });

  $('#replace_with_12_render_json').click(() => {
    post_area.empty();
    console.log('clicked');
    $.ajax({
      method: 'PUT',
      url: 'http://jsonplaceholder.typicode.com/posts/12',
      data: {
        completed: false,
        title: 'Testing... Data replaced',
        body: 'The old message has been replaced',
        userId: 12
      },
      complete: res => {
        console.log(res.responseJSON);
        let data = res.responseJSON;

        // 
        let replaced_title = $('<h2 class+"post_title"></h2>');
        replaced_title.text(data.title);
        post_area.append(replaced_title);

        // 
        let replaced_body = $('<h2 class+"post_body"></h2>');
        replaced_body.text(data.body);
        post_area.append(replaced_body);
      }
    });
  });
});
