<!-- This file is used to store sidebar items, starting with Backpack\Base 0.9.0 -->
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('dashboard') }}"><i
            class="la la-home nav-icon"></i> {{ trans('backpack::base.dashboard') }}</a></li>
@if (backpack_user()->can('admin'))
    <li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#"><i class="las la-credit-card"></i> Main Menu</a>
        <ul class="nav-dropdown-items">
            <li class='nav-item'><a class='nav-link' href='{{ backpack_url('page') }}'>
                    <i class="lab la-leanpub"></i>
                    Pages</a></li>
            <li class='nav-item'><a class='nav-link' href='{{ backpack_url('section') }}'>
                    <i class="las la-plus-square"></i>
                    Sections</a></li>
        </ul>
    <li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#"><i class="las la-bars"></i> Side Menu</a>
        <ul class="nav-dropdown-items">
            <li class='nav-item'><a class='nav-link' href='{{ backpack_url('article') }}'>
                    <i class="las la-newspaper"></i>
                    Articles</a></li>
            <li class='nav-item'><a class='nav-link' href='{{ backpack_url('category') }}'>
                    <i class="las la-folder"></i>
                    Categories</a></li>
        </ul>
    </li>

    <li class='nav-item'><a class='nav-link' href='{{ backpack_url('gallery') }}'>
            <i class="las la-photo-video"></i> Galleries</a></li>
    <li class='nav-item'><a class='nav-link' href='{{ backpack_url('slideshow') }}'>
            <i class="las la-images"></i>
            Slideshows</a></li>
    <li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#"><i class="las la-level-down-alt"></i> Footer</a>
        <ul class="nav-dropdown-items">
            <li class='nav-item'><a class='nav-link' href='{{ backpack_url('footer-column') }}'>
                    <i class="las la-columns"></i>
                    Footer columns</a></li>
            <li class='nav-item'><a class='nav-link' href='{{ backpack_url('footer-row') }}'>
                    <i class="las la-grip-lines"></i> Footer rows</a></li>
        </ul>
    <li class='nav-item'><a class='nav-link' href='{{ backpack_url('setting') }}'>
            <i class="las la-radiation-alt"></i>
            Settings</a></li>
@endif
@if (backpack_user()->can('profile') || backpack_user()->can('admin'))
    <li class='nav-item'><a class='nav-link' href='{{ backpack_url('profile') }}'>
            <i class="las la-portrait"></i>
            Profiles</a></li>
    <li class='nav-item'><a class='nav-link' href='{{ backpack_url('tag') }}'>
            <i class="las la-tags"></i>
            Tags</a></li>
@endif
@if (backpack_user()->id == 1)
    <!-- Users, Roles, Permissions -->
    <li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#"><i class="nav-icon la la-users"></i> Authentication</a>
        <ul class="nav-dropdown-items">
            <li class="nav-item"><a class="nav-link" href="{{ backpack_url('user') }}"><i
                        class="nav-icon la la-user"></i> <span>Users</span></a></li>
            <li class="nav-item"><a class="nav-link" href="{{ backpack_url('role') }}"><i
                        class="nav-icon la la-id-badge"></i> <span>Roles</span></a></li>
            <li class="nav-item"><a class="nav-link" href="{{ backpack_url('permission') }}"><i
                        class="nav-icon la la-key"></i> <span>Permissions</span></a></li>
        </ul>
    </li>
    <li class="nav-item"><a class="nav-link" href="{{ backpack_url('elfinder') }}\"><i
                class="nav-icon la la-files-o"></i> <span>{{ trans('backpack::crud.file_manager') }}</span></a></li>
@endif
