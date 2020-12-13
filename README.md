1. This idea started its journey a few months ago when we both agreed that social media apps like instagram are way too addicting, but they are also nice because you can check in with family and friends. We both go through phases where we delete instagram, and then end up redownloading it to essentially check in on people. While this seems like a good idea, we realized that redownloading it only made us want to check it every 10 minutes. Our app, memory stack, was the answer to these issues. Users can upload images with a username and caption much like instagram, but they aren't actually visible for two hours from the time the user posts it. We originally planned for 7 days but two hours seemed more appropriate for testing purposes. This takes away the "instant gratification" of obsessing over likes, comments, etc., and encourages people to stay in the present and away from their phones.  
2. Our app is not a to-do list manager 
3. This website was created by Jenna Horrall and Callan Hand
4. All the code was written by us
5. Our app has both of these. Our front-end client can be accessed at https://project2.callanhand.me and our back-end web service can be accessed at https://proj2-api.callanhand.me:8442 
6. Our app uses React's functional components (Post.js) and hooks such as useEffect for dispatching our fetchPosts function
7. Our app allows the client to add images with a caption and their username to the site 
8. We used redux to manage the state of our app by retrieving the "posts" data payload from the server and displaying them to the user
9. Our app follows a minamalist design with coherent alignment, consistent fonts for all buttons and menus, harmonious colors and is accessible on both large and small displays 
10. Yes, we use a fetch call to upload posts to our database and to retrieve them using the get/post methods
11. Our app notifies the user that after they upload a picture it will not be displayed for two hours 
12. Our client is free from all warnings and errors
13. Our front-end client can be found at https://github.com/handcg1/project2-frontend
14. Our front-end client is available at https://project2.callanhand.me and you will be redirected to port 443 if you try to access the client through port 80
15. Our app stores the id, username, picture file name, caption, posted_at date and display_post_at date in a mysql database
16. We used ufw to block all the ports but port 8442 (nginx), 443 (for our front-end website), and the SSH port
17. Our web service uses JSON to send the post information to and from the database
18. Our endpoints are appropriately named to reflect the actions they perform such as upload-post, which inserts a post "object" into the database
19. Yes, our web service includes cors 
20. Our web service uses pm2
21. We have created an Nginx server that allows global, encrypted access to our web service
22. Our back-end is stored on the git repository https://github.com/handcg1/project2-backend


