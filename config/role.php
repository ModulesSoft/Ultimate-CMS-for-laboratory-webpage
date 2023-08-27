<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Supervisors and Alumni Role Names
    |--------------------------------------------------------------------------
    |
    | These arrays configure the role names of the suprevisors and alumni.
    |
    */
    'supervisors' => explode(',', env("SUPERVISOR_ROLES", "Professor,Adjunct prof")),
    'alumni' => explode(',', env("ALUMNI_ROLES", "Graduated B.Sc.,Graduated M.Sc.,Graduated Ph.D.")),

];
