document.addEventListener('DOMContentLoaded', function () {
    let btn_pojects = document.getElementById('project_link');
    let show_projects = document.getElementById('wrap_projects');
    let btn_close = document.getElementById('close_icon');

    btn_close.style.cursor = 'pointer';


    btn_pojects.addEventListener('click', () => {
        show_projects.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    )
    btn_close.addEventListener('click', () => {
        show_projects.style.display = 'none';
        document.body.style.overflow = 'auto';
    })
});