# 🎬 Movie Search App

A **responsive movie search web app** built with **HTML, CSS, and JavaScript** that fetches movie data dynamically from the **OMDb API**. Users can search for movies and see their posters, titles, and release years instantly.

---

## 📸 Screenshots

Home Page:

![Movie Search App Home](</Screenshot%20(443).png>)

## 🖼 Demo

Live version: [Movie Search App](https://mahmoud202202766-creator.github.io/movie-search-app/)

---

## 🚀 Features

- 🔍 Search for movies by title
- 📋 View movie posters, titles, and release years
- 🕒 Loading indicator while fetching results
- ⚠️ Error handling for invalid searches
- 📱 Fully responsive UI

---

## 🧩 How It Works

1. User types a movie name in the input field.
2. When the form is submitted, `searchMovie()` is called.
3. The app uses the **Fetch API** to request movies from OMDb using your API key.
4. Results are displayed dynamically as **movie cards**.
5. If the movie poster is unavailable, a placeholder image is shown.
6. Errors or no results are handled gracefully with a message.

---

## 📁 Project Structure

```
movie-search-app/
├─ index.html         # Main HTML page
├─ main.js            # JavaScript for search functionality
├─ css/
│   └─ style.css      # Styling for the app
└─ tv.png             # Favicon
```

---

## 🏁 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mahmoud202202766-creator/movie-search-app.git
cd movie-search-app
```

### 2. Open the app

- Open `index.html` in a modern browser.
- No backend or server setup is required.

---

## 🔑 API Setup

app uses the **OMDb API**:

```js
const API_KEY = "c1ba4c27";
```

- This key is hardcoded in `main.js`.
- To use your own key, replace the value of `API_KEY` with your personal key from [OMDb API](https://www.omdbapi.com/apikey.aspx).

---

## 💻 Technologies Used

- **HTML5** – structure and layout
- **CSS3** – styling and responsive design
- **JavaScript (ES6)** – Fetch API, DOM manipulation
- **OMDb API** – movie data
- **PostMan** \_ test Api

---

## 📌 Future Improvements

- Implement **pagination** for search results
- Add a **favorites list** saved in localStorage
- Include **loading spinners** and better error handling

---

## 📜 License

This project is **open source** under the **MIT License**.
