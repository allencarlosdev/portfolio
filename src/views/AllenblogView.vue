<template>
    <div class="allenblog">
        <div class="allenblog__container">
            <h1 class="allenblog__h1">Sorry the project "AllenBlog" don't have public page</h1>
            <div class="allenblog__img">
                <img class="allenblog__image" loading="lazy" src="@/assets/allenpage3.png" alt="project 3 home">
                <img class="allenblog__image" loading="lazy" src="@/assets/adminallenpage3.png" alt="project 3 AdminLTE">
            </div>
            <p class="allenblog__p">Reason: I don't have an international credit card (at the moment) for that, I couldn't create my Heroku account</p>
            <p class="allenblog__p">Installations: If you want to see this project you must install locally, for that you must first have the following programs installed.</p>
            <ul class="allenblog__p">
                <li class="allenblog__li">"Git"</li>
                <li class="allenblog__li">"Docker" (with laravel sail configuration)"</li>
                <li class="allenblog__li">you need a terminal like for example: "Powershell"</li>
            </ul>
            <p class="allenblog__p">1) open the terminal and enter your docker folder (wsl).</p>

            <p class="allenblog__p">2) when you are in your docker projects folder (if you use window you can enter through \\wsl$ ) and create a folder for the project.</p>
            <p class="allenblog__p">3) Go back to your Powershell terminal and try to get into the project folder you created.
            If you have docker through window it would be something like this:
            </p>

            <ul>
                <li class="allenblog__li">wsl</li>
                <li class="allenblog__li">cd ~</li>
                <li class="allenblog__li">ls (to see the folders you have in your \\wsl$)</li>
                <li class="allenblog__li">enter by: cd (folder name)</li>
            </ul>
            <h2 class="allenblog__h2">Remember that before some commands below you should put the word "sail" according to how you configured your laravel sail installation.</h2>
            <p class="allenblog__p">4) In your terminal with the project address you must place this: git clone https://github.com/allencarlosdev/Allenpage3.git (for download the proyect)</p>
            <p class="allenblog__p">5) Install Composer dependencies for existing applications: put the following command: <br> docker run --rm \
     -u "$(id -u):$(id -g)" \
     -v $(pwd):/var/www/html \
     -w /var/www/html \
     laravelsail/php81-composer:latest \
     composer install --ignore-platform-reqs <br> <a class="allenblog__link" rel="noopener noreferrer" target="_blank" href="https://laravel.com/docs/8.x/sail#installing-composer-dependencies-for-existing-projects">Official laravel documentation link to copy the code</a></p>
            <p class="allenblog__p">6) Install composer and npm in the project : sail composer install , sail npm install</p>
            <p class="allenblog__p">7) Duplicate file env.example and rename it as .env</p>
            <p class="allenblog__p">8) Turn on your project in docker using the sail up command (at the project address)</p>
            <p class="allenblog__p">9) Open phpmyadmin through http://localhost:8080/ or on the port you have configured and create the database (remember to put the data in the env file of the project)</p>
            <p class="allenblog__p">10) You can now open the project but first you must migrate the database with the command sail php artisan migrate</p>

        </div>
    </div>
</template>

<style scoped>
    .allenblog {
        position: absolute;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: var(--background-body);
        margin-top:5rem;
        z-index: 5;
    }
    .allenblog__container{
        display: flex;
        flex-direction: column;
        background: var(--background-footer);
        border-radius: 1rem;
        padding: 2rem;
        overflow-y: scroll;
        margin-bottom: 13rem;
    }
    .allenblog__img {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
    }
    .allenblog__image {
        width: 30rem;
        height: 15rem;
    }
    .allenblog__h1 {
        text-align: center;
        color: var(--letter-color);
        font-size: 3rem;
        margin-bottom: 1.5rem;
    }
    .allenblog__h2{
        text-align: center;
        color: var(--letter-color);
        font-size: 1.5rem;
        margin: 2rem 0;
    }
    .allenblog__p{
        margin-bottom: 1rem;
    }
    .allenblog__li{
        list-style-type: circle;
        margin-left: 2rem;
    }
    .allenblog__link{
        color: aqua;
        text-decoration: underline;
    }
</style>
