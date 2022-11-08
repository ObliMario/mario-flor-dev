/* Create a list of pseudo-posts with title, slug and content*/
import logo from "./logo.svg";

const posts = [];
posts.push({
  title: "This website!",
  slug: "website",
  content:
    "This website is made with React and React Router. Also there are elements uploaded on AWS S3. This page has many CSS animations and transitions, also the HTML is made in a way that it is responsive to different screen sizes. The code in JS, HTML and CSS are made in optimized way to make the page load faster. In this page you can find some of my projects and my professional information. In the future I will add more projects and more information about me.The source code is available on GitHub.", 
  imgcss: "App-logo",
  image: logo,
});
posts.push({
  title: "CS50 Jelly Game",
  slug: "jellygame",
  content:
    "This Game was developed as a final project of the course CS50G. A course imparted from Hardvard wich I completed and obtained a certificadte for it. The game developed (called CS50 Jelly) was made in Unity, it is a puzzle game that consists of completing a series of levels by driving a ball with the mouse by clicking the ball and dragging the mouse such as the launching mechanics in angry birds game. By right-clicking, the ball changes its material which will be necessary for some levels. CS50 Jelly consists of five levels that increase in difficulty. In this way, the game has a cohesive start-to-finish experience for the player when the player completes the last level. The player has some loss conditions such as when the ball collides with the spikes or falls out the stage, the player then will lose and repeat the level. Once the player completes the last level, a congratulations screen will appear for completing the game. However, the user can repeat any level to achieve the maximum score in all levels (3 stars) by reaching the goal with the minimum number of possible moves (which are shown on the screen). Reaching 3 stars at all levels can be a secondary goal. You can download the game from my personal Github: https://github.com/me50/ObliMario",
  YTlink: "https://youtu.be/pBdRLonhN_k",
  YTID: "pBdRLonhN_k",
});
posts.push({
  title: "Pacman Game",
  slug: "pacman",
  content:
    "Pacman game made with Unity This project is a complete Pacman game. The map is made by reading a .csv file and positioning each asset depending on the code in the file. The ghosts IA are just like the original ones. Also, the game contains a system to save the max scores into a .txt file and show them inside the game. You can find the code in the following link: https://github.com/ObliMario/PACMAN",
  YTlink: "https://youtu.be/p_NJqCJ2Fts",
  YTID: "p_NJqCJ2Fts",
});
posts.push({
  title: "Evolution Game",
  slug: "evo",
  content:
    "This is the prototype of a game that I am developing. You can choose between two 'animals' with different characteristics of color and size. Their genes define their size and color. So after choosing two, their genes will be mixed and the result will be a new generation of animals. The concept of DNA is based on real DNA dynamics. A new generation of animals will have the characteristics of their parents. The game is still in development",
  YTlink: "https://youtu.be/7uEtePL5Ci4",
  YTID: "7uEtePL5Ci4",
});
posts.push({
  title: "Encryption System made with Dinamic Systems",
  slug: "DSEncryption",
  content:
    "We have created a software that implements the generalized encryption and storage method in an app, so that it can be used by anyone with a computer with Linux-Ubuntu operating system. The software makes use of a graphical interface designed with the Tkinter package. This project allows user to encode and decode any digital file. The encryption keys are the initial conditions of 'x0'. In order to open the app you must run the python code 'GUI.py'. You can find the code in the following link: https://github.com/ObliMario/DS_EncryptionSystem",
    image: "https://marioflordev.s3.us-west-2.amazonaws.com/DSE.png",
});

posts.push({
  title: "Quiz Program",
  slug: "quiz",
  content:
    "This program allows you to enter a .txt file with data of a Quiz. The program will read the file and will show the questions and the answers. The user will have to answer the questions and the program will show the score. You can find the code in the following link:https://github.com/ObliMario/quiz",
    YTlink: "https://youtu.be/bEyFS7pfzKg",
    YTID: "bEyFS7pfzKg",
});

export { posts };
