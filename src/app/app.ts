import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Services } from "./components/services/services";
import { Skills } from "./components/skills/skills";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Hero, Projects, Contact, Footer, Services, Skills],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}