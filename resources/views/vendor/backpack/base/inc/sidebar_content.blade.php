<!-- This file is used to store sidebar items, starting with Backpack\Base 0.9.0 -->
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('dashboard') }}"><i
            class="la la-home nav-icon"></i> {{ trans('backpack::base.dashboard') }}</a></li>
@if (backpack_user()->can('admin'))
    <li class='nav-item'><a class='nav-link' href='{{ backpack_url('article') }}'><i
                class='nav-icon la la-question'></i>
            Articles</a></li>
    <li class='nav-item'><a class='nav-link' href='{{ backpack_url('category') }}'><i
                class='nav-icon la la-question'></i>
            Categories</a></li>
    <li class='nav-item'><a class='nav-link' href='{{ backpack_url('footer-column') }}'><i
                class='nav-icon la la-question'></i> Footer columns</a></li>
    <li class='nav-item'><a class='nav-link' href='{{ backpack_url('footer-row') }}'><i
                class='nav-icon la la-question'></i> Footer rows</a></li>
    <li class='nav-item'><a class='nav-link' href='{{ backpack_url('gallery') }}'><i
                class='nav-icon la la-question'></i>
            Galleries</a></li>
    <li class='nav-item'><a class='nav-link' href='{{ backpack_url('page') }}'><i class='nav-icon la la-question'></i>
            Pages</a></li>
    <li class='nav-item'><a class='nav-link' href='{{ backpack_url('section') }}'><i
                class='nav-icon la la-question'></i>
            Sections</a></li>
    <li class='nav-item'><a class='nav-link' href='{{ backpack_url('setting') }}'><i
                class='nav-icon la la-question'></i>
            Settings</a></li>
    <li class='nav-item'><a class='nav-link' href='{{ backpack_url('slideshow') }}'><i
                class='nav-icon la la-question'></i> Slideshows</a></li>
@endif
@if (backpack_user()->can('profile') || backpack_user()->can('admin'))
    <li class='nav-item'><a class='nav-link' href='{{ backpack_url('profile') }}'><i
                class='nav-icon la la-question'></i>
            Profiles</a></li>
    <li class='nav-item'><a class='nav-link' href='{{ backpack_url('tag') }}'><i class='nav-icon la la-question'></i>
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
