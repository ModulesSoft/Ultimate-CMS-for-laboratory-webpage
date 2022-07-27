## Demo

[Biofluids laboratory of Amirkabir University of Technology](https://biofluids.aut.ac.ir)

To check out its admin panel use:

Email: demo@majhoolsoft.com

Password: demo

## Youtube Link

You can watch the admin panel introduction [here](https://www.youtube.com/watch?v=FCyPJ5CzSjE)

## Install

1. In your terminal run:

```bash
git clone https://github.com/majhoolsoft/Ultimate-CMS-for-laboratory-webpage.git
```

Back-end:

2. Set up your database,email and corresponding permissions and roles information in /.env (use the .env.example as an example)

3. In your root folder run:

```bash
composer install
php artisan key:generate
php artisan migrate
php artisan db:seed
```

Front-end:

4. Set up your desired (translation) locale by uncommenting corresponding values in config/backpack/crud.php

5. Set up your translation data and sitekey for Google recaptcha in resources/translations.json

6. In your root folder run:

```bash
npm install
npx mix --production
```

## Usage

1. Your admin panel is available at /admin
2. After running db:seed you can login with email `admin@admin.admin`, password `admin` as the Super Admin.
3. In order to enable content management in the admin panel, you have to create a new permission EQUAL to the value of 'ADMIN_PERMISSION' which you have defined earlier in the .env file (default : 'admin') and then assign it to your desired user.

Note:

1. By default, registration is open only in your local environment. Check out `config/backpack/base.php` to change this and other preferences.

2. Depending on your configuration you may need to define a site within NGINX or Apache; Your URL domain may change from localhost to what you have defined.

## Credits

-   [Majhoolsoft][link-author]
-   [Backpack for Laravel][link-backpack]

## License

Just give this project a star and then you are free to use :-).

Its other credits is based on React and Laravel's privileges:

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

React is [MIT licensed](https://github.com/facebook/react/blob/main/LICENSE).

Yet, for Backpack team it may not be the same for non-commercial use. Please find their corresponding license at [backpackforlaravel.com](https://backpackforlaravel.com/#pricing) for more information.

## Hire me

I've spent lots of hours, thousands lines of codes creating, polishing and maintaining different types of websites on Laravel, React.js and so on.

If you are looking for a developer at Canada to help you build your desired web application you are welcomed to contact me. [Contact me - let's see if we can work together](mailto:majhool.yf@gmail.com).

[link-author]: https://majhoolsoft.com
[link-backpack]: https://backpackforlaravel.com/
