import { Component } from '@angular/core';

@Component({
  selector: 'app-name-card',
  standalone: true,
  template: `
    <div class="card-container">
      <div class="name-card">
        <div class="card-header">
          <img src="/images.jpg" alt="Profile Picture" class="profile-pic">
        </div>
        <div class="card-body">
          <h1>{{ fullName }}</h1>
          <p class="title">{{ jobTitle }}</p>
          <p class="bio">{{ bio }}</p>
        </div>
        <div class="card-footer">
          <div class="contact-info">
            <p><strong>Email:</strong> {{ email }}</p>
            <p><strong>Phone:</strong> {{ phone }}</p>
            <p><strong>Location:</strong> {{ location }}</p>
          </div>
        </div>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/konark-verma-b72539268/" target="_blank" rel="noopener noreferrer" class="social-btn">LinkedIn</a>
          <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" class="social-btn">Twitter</a>
          <a href="https://github.com/Konark1" target="_blank" rel="noopener noreferrer" class="social-btn">GitHub</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
    }

    .name-card {
      background: white;
      border-radius: 15px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      max-width: 400px;
      width: 100%;
      overflow: hidden;
      transition: transform 0.3s ease;
    }

    .name-card:hover {
      transform: translateY(-10px);
    }

    .card-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 30px;
      text-align: center;
    }

    .profile-pic {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 5px solid white;
    }

    .card-body {
      padding: 30px;
      text-align: center;
    }

    .card-body h1 {
      margin: 20px 0 10px;
      color: #333;
      font-size: 2rem;
    }

    .title {
      color: #667eea;
      font-weight: bold;
      font-size: 1.1rem;
      margin: 0 0 15px;
    }

    .bio {
      color: #666;
      font-size: 0.95rem;
      line-height: 1.5;
      margin: 0;
    }

    .card-footer {
      border-top: 1px solid #eee;
      padding: 20px 30px;
    }

    .contact-info p {
      margin: 8px 0;
      color: #555;
      font-size: 0.9rem;
    }

    .contact-info strong {
      color: #333;
    }

    .social-links {
      display: flex;
      gap: 10px;
      padding: 20px 30px;
      justify-content: center;
      border-top: 1px solid #eee;
    }

    .social-btn {
      flex: 1;
      padding: 10px;
      background-color: #667eea;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      text-align: center;
      transition: background-color 0.3s;
      font-size: 0.9rem;
    }

    .social-btn:hover {
      background-color: #764ba2;
    }
  `]
})
export class NameCardComponent {
  fullName = 'Konark Verma';
  jobTitle = 'HCLTech DotNet';
  bio = 'Passionate about building amazing web applications and learning new technologies.';
  email = 'HclEmployee@pro.com';
  phone = '+91 8929801749';
  location = 'Naweda , Sector 126';
}
