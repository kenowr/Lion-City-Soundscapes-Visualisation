<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Lion City Soundscapes</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/nemopotatoes/Lion-City-Soundscapes-Visualisation"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/nemopotatoes/Lion-City-Soundscapes-Visualisation">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- Python
- Django
- LeafletJS
- Javascript
- HTML/CSS

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

Before setting up the project, make sure the follow has been installed:

- Python

- Django Virtual Enviornment

  ```sh
  pip install virtualenv
  ```

- Django Virtual Enviornment
  ```sh
  pip install django
  ```

### Installation

1. Clone the repo

```sh
git clone https://github.com/nemopotatoes/Lion-City-Soundscapes-Visualisation.git
```

2. Install project dependencies
   In your project directory:

```sh
pip install -r requirements.txt
```

3. Generate SECRET KEY

- Navigate to the cloned project directory 'lioncitysoundscapes' and create a new project by running `django-admin startproject newproject .`
- Go to to `settings.py` in the new project and copy the `SECRET_KEY`

4. Enter your `SECRET_KEY`
   Navigate to `settings.py` of the cloned project and paste your `SECRET_KEY` there

```py
SECRET_KEY = "ENTER YOUR SECRET_KEY"
```

5. Run the server
   Navigate to the cloned project directory 'lioncitysoundscapes' and run `python manage.py runserver`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Set up Django project
- [x] Set up Leaflet interactive map
- [ ] AWS Integration
- [ ] Other Pages: About, Resources, Recordings, Contact
- [ ] Admin Panel

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Goh Jessie - jesgjx@gmail.com

Project Link: [https://github.com/nemopotatoes/Lion-City-Soundscapes-Visualisation](https://github.com/Lion-City-Soundscapes-Visualisation)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
