# Project  Apartment Listing

## Description

This application leverages Docker Compose to seamlessly run two essential services: Next.js for the user interface and Nest.js for the backend API.

## Features

* **Next.js Frontend:** Provides a dynamic and interactive user experience.
* **Nest.js Backend:** Offers a robust and scalable foundation for managing your application's logic and data.
* **Nest.js Backend:** once you create the database and run the application, the database will be populated with some data.

## Running the Application

**Prerequisites:**

* Ensure you have Docker and Docker Compose installed on your system. You can find installation instructions on the official Docker website: <https://docs.docker.com/engine/install/>

**Clone the Repository:**

```bash
git clone https://github.com/hazem-a1/apartment-fullstack.git
```

**Start the Services:**

```bash
docker-compose -f docker-compose.yaml up -d --build
