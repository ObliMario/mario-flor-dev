/* Create a list of pseudo-posts with title, slug and content*/
import logo from "./logo.svg";

const posts = [];
posts.push({
  title: "This website!",
  slug: "website",
  content:
    "Welcome to my portfolio website! This website is built using React and React Router, and uses AWS S3 for hosting some of the elements. It features beautiful CSS animations and transitions, and is designed to be fully responsive and adapt to different screen sizes. The code is optimized for speed, ensuring that the page loads quickly for visitors. On this website, you can find some of my projects and learn more about my professional background and skills. I will continue to add more projects and updates to the website in the future. The source code for this website is available on GitHub for anyone who is interested. I hope you enjoy exploring my portfolio website and learning more about my work. Thank you for visiting!", 
  imgcss: "App-logo",
  image: logo,
});
posts.push({
  title: "Artificial Inteligence Agent",
  slug: "AI-Game",
  content:
    "I trained an artificial intelligence using reinforced learning so that it could learn to play a simple game where it had to collect coins while avoiding an enemy. Through training, the artificial intelligence improved its ability to play the game until it reached the maximum score. You can see how the artificial intelligence learns to play the game in the attached video. This project demonstrates my skills in using artificial intelligence and reinforced learning to solve problems and improve skills.", 
  YTlink: "https://youtu.be/hoGYSWDP73g",
  YTID: "hoGYSWDP73g",
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
    "Introducing PACMAN, the classic arcade game brought to life in Unity! This project is a faithful recreation of the original game, featuring the iconic maze and ghosts with authentic AI behavior. The map is generated dynamically by reading a .csv file, which allows for easy customization and variation. In addition to the classic gameplay, this game also includes a high score system that saves the top scores to a .txt file and displays them within the game. You can check out the source code for this project on GitHub at the following link: https://github.com/ObliMario/PACMAN",
  YTlink: "https://youtu.be/p_NJqCJ2Fts",
  YTID: "p_NJqCJ2Fts",
});
posts.push({
  title: "Evolution Game",
  slug: "evo",
  content:
    "Welcome to my game prototype! In this game, you can create and mix the genes of two different animals to create a new generation with unique characteristics. The genes of each animal determine their size and color, and the resulting offspring will inherit traits from their parents. This game is based on real DNA dynamics, providing an engaging and educational experience. As you experiment with different combinations of genes, you will see how the characteristics of the animals evolve and change. The game is still in development, but I hope to add more features and content in the future.",
  YTlink: "https://youtu.be/7uEtePL5Ci4",
  YTID: "7uEtePL5Ci4",
});
posts.push({
  title: "Encryption System made with Dinamic Systems",
  slug: "DSEncryption",
  content:
    "Introducing my thesis project: a software application that implements a generalized encryption and storage method, designed to be used on computers with the Linux-Ubuntu operating system. The software features a user-friendly graphical interface built using the Tkinter package. This project allows users to easily encode and decode any digital file, using the initial conditions of 'x0' as the encryption keys. To run the app, simply execute the 'GUI.py' python code. You can find the source code for this project on GitHub at the following link: https://github.com/ObliMario/DS_EncryptionSystem I am proud of this project as it represents the culmination of my research and hard work in the field of cryptography and data security. I hope this software proves useful and valuable to other users. Thank you for checking out my thesis project.",
    image: "https://marioflordev.s3.us-west-2.amazonaws.com/DSE.png",
});

posts.push({
  title: "Quiz Program",
  slug: "quiz",
  content:
    "Introducing my Quiz program! This program allows you to easily create and administer quizzes using a simple .txt file format. Simply enter the quiz data into the .txt file and the program will automatically read and display the questions and answers. As the user answers the questions, the program will track their score and provide feedback on their performance. At the end of the quiz, the user will receive their final score and can review the correct answers for any questions they may have gotten wrong. You can find the source code for this program on GitHub at the following link: https://github.com/ObliMario/quiz I hope you enjoy using my Quiz program and find it useful for creating and administering quizzes. Thank you for checking out my project!",
    YTlink: "https://youtu.be/bEyFS7pfzKg",
    YTID: "bEyFS7pfzKg",
});

posts.push({
  title: "Deutsch App",
  slug: "deutschapp",
  content:
    "This app is developed in Flutter and is designed to help users learn German as a foreign language. In the 'Prepositions' section, a list of verbs with their most common prepositions is displayed. It also allows you to add new verbs, new prepositions, and reset the content to its initial state. When you open the practice screen, the verbs to study are shown. The app follows a flashcard model: it only shows the verb and asks you to think of the prepositions that go with it. By pressing 'Reveal prepositions,' the correct prepositions associated with the verb are displayed. When you tap on the card with the preposition, the meaning of the verb with that preposition is shown. From the verbs menu, you can search, modify, add, and delete any verb-preposition combination.",
    YTlink: "https://youtu.be/-pZRJMEHaOQ",
    YTID: "-pZRJMEHaOQ",
});


export { posts };
