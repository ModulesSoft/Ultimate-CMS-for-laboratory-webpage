<!-- This file is used to store sidebar items, starting with Backpack\Base 0.9.0 -->
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('dashboard') }}"><i class="nav-icon la la-home"></i>{{ trans('backpack::base.dashboard') }}</a></li>
@if (backpack_user()->can(config('permission.admin')) || backpack_user()->can(config('permission.demo')))
<li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#"><i class="nav-icon las la-credit-card"></i>Main Menu</a>
        <ul class="nav-dropdown-items">
                <li class='nav-item'><a class='nav-link' href='{{ backpack_url('page') }}'>
                                <i class="nav-icon lab la-leanpub"></i>Pages</a></li>
                <li class='nav-item'><a class='nav-link' href='{{ backpack_url('section') }}'>
                                <i class="nav-icon las la-plus-square"></i>Sections</a></li>
        </ul>
<li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#"><i class="nav-icon las la-bars"></i>Side Menu</a>
        <ul class="nav-dropdown-items">
                <li class='nav-item'><a class='nav-link' href='{{ backpack_url('article') }}'>
                                <i class="nav-icon las la-newspaper"></i>Articles</a></li>
                <li class='nav-item'><a class='nav-link' href='{{ backpack_url('category') }}'>
                                <i class="nav-icon las la-folder"></i>Categories</a></li>
        </ul>
</li>

<li class='nav-item'><a class='nav-link' href='{{ backpack_url('gallery') }}'>
                <i class="nav-icon las la-photo-video"></i>Galleries</a></li>
<li class='nav-item'><a class='nav-link' href='{{ backpack_url('slideshow') }}'>
                <i class="nav-icon las la-images"></i>Slideshows</a></li>
<li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#"><i class="nav-icon las la-level-down-alt"></i>Footer</a>
        <ul class="nav-dropdown-items">
                <li class='nav-item'><a class='nav-link' href='{{ backpack_url('footer-column') }}'>
                                <i class="nav-icon las la-columns"></i>Footer columns</a></li>
                <li class='nav-item'><a class='nav-link' href='{{ backpack_url('footer-row') }}'>
                                <i class="nav-icon las la-grip-lines"></i>Footer rows</a></li>
        </ul>
<li class='nav-item'><a class='nav-link' href='{{ backpack_url('setting') }}'>
                <i class="nav-icon las la-radiation-alt"></i>Settings</a></li>
@endif
@if (backpack_user()->can(config('permission.profile')) || backpack_user()->can(config('permission.admin')) || backpack_user()->can(config('permission.demo')))
<li class='nav-item'><a class='nav-link' href='{{ backpack_url('profile') }}'>
                <i class="nav-icon las la-portrait"></i>Profiles</a></li>
<li class='nav-item'><a class='nav-link' href='{{ backpack_url('tag') }}'>
                <i class="nav-icon las la-tags"></i>Tags</a></li>
@endif
<!-- Super Admin -->
@if (backpack_user()->id === 1 || backpack_user()->can(config('permission.demo')))
<!-- Users, Roles, Permissions -->
<li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#"><i class="nav-icon la la-users"></i>Authentication</a>
        <ul class="nav-dropdown-items">
                <li class="nav-item"><a class="nav-link" href="{{ backpack_url('user') }}"><i class="nav-icon la la-user"></i> <span>Users</span></a></li>
                <li class="nav-item"><a class="nav-link" href="{{ backpack_url('role') }}"><i class="nav-icon la la-id-badge"></i> <span>Roles</span></a></li>
                <li class="nav-item"><a class="nav-link" href="{{ backpack_url('permission') }}"><i class="nav-icon la la-key"></i> <span>Permissions</span></a></li>
        </ul>
</li>
@if (backpack_user()->id === 1)
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('elfinder') }}\"><i class="nav-icon la la-files-o"></i>
                <span>{{ trans('backpack::crud.file_manager') }}</span></a>
</li>
@endif
@endif