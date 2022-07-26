<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Supervisors Role Name
    |--------------------------------------------------------------------------
    |
    | This array the role name of your suprevisors. This value is used when the
    | framework needs to place the suprevisors's name in profiles relations of 
    | other profile (student) roles.
    |
    */
    'supervisors' => explode(',', env("SUPERVISOR_ROLES", "Professor,Adjunct prof")),

];
