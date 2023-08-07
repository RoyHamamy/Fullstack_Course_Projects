In order to commit an attack you need to go to the attack version of the assignment. We commited the version under the name: "This is the ATTACK version of the assignment!!!FINAL VERSION!!!!!!".

Afterwards, in the terminal you need to do "npm install" (or "npm install --force" if needed) and then do "npm run dev", and the website should appear.

Here are the steps to follow:

1. sign in as the attacker:
   go to the Login page and Log in this:
	Email: csrfattacker@gmail.com
	Password: 12345678

2. press "Login".

3. once you are logged in, right click on your mouse and go to "inspect" (also F12 in your keyboard).

4. in "Applications", go to "Cookies".

5. there you will see "MyCookie". it holds your token and information that you gave.
   it should look like a json object: {"token":...,"email":...,"name":...,"id":...}

6. now, access your cmd and put in:

curl -X POST  -H "Content-Type: application/x-www-form-urlencoded"  -H "Authorization: <INSERT YOUR TOKEN HERE>" -d "title=CSRFAttack Title&content=CSRFAttack Content&email=csrfattacker@gmail.com" http://localhost:3000/api/post

7. now, go to the drafts page and you will see that a new post was created there, ready to be published.

That was the attack part. Now comes the deffense part:
Enter the deffence version of the assignment, it is the commit called "This is the DEFFENCE version of the assignment!!!FINAL VERSION!!!!!!".

8. once you initialized the website, login again as the attacker as described in segments 1 and 2 above.

9. enter the same curl command from segment #6 and now you will see that the message:
{"message":"Invalid CSRF token"}.

Notice that no new posts were saved on your drafts.
That is because of the csrf token that was added to the deffence v ersion of the assignment.
Thats it.
Thank you.