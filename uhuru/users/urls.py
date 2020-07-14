from django.urls import path
from django.contrib.auth import views as auth_views
from .views import register, edit_profile

urlpatterns = [
    #path('request/', register_request, name='register_request'),
    #path('confirm_request/', confirm_request, name='confirm_request'),
    path('register/', register, name='register'),
    #path('view_requests/', view_requests, name='view_requests'),
    path('login/', auth_views.LoginView.as_view(template_name='users/login.html'), name='login'),
    path('edit_profile/', edit_profile, name='edit_profile'),
    # path('password-reset/',
    #      auth_views.PasswordResetView.as_view(template_name='users/password_reset.html'),
    #      name='password_reset'),
    path('logout/', auth_views.LogoutView.as_view(template_name='users/logout.html'), name='logout'),

    path('password_change/', auth_views.PasswordChangeView.as_view(template_name="users/password_change_form.html"), name="password_change"),
    path('password_change/done/', auth_views.PasswordChangeDoneView.as_view(template_name="users/password_change_done.html"), name="password_change_done"),
    
    path('password_reset/', 
        auth_views.PasswordResetView.as_view(
        template_name="users/password_reset.html",
        email_template_name = 'users/password_reset_email.html',
        subject_template_name = 'users/password_reset_subject.txt'), name="password_reset"),
    path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(template_name="users/password_reset_done.html"), name="password_reset_done"),
    path('reset/<uidb64>/<token>/', 
    auth_views.PasswordResetConfirmView.as_view(
        template_name="users/password_reset_confirm.html",
        post_reset_login = True), name="password_reset_confirm"),
    path('reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name="users/password_reset_complete.html"), name="password_reset_complete"),
]