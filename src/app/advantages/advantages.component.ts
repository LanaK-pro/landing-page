import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

export interface Manga {
  title: string;
  author: string;
  genre: 'Shonen' | 'Seinen'; // Using a union type for specific genres
  volumes: number;
  published: string;
}

@Component({
  selector: 'app-advantages',
  standalone: true,
  imports: [NgFor],
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.css',
})
export class AdvantagesComponent {
  /* articles = [
    {
      logo: 'https://www.svgrepo.com/show/438713/one-open.svg',
      title: 'Titre 1',
      content: 'contenue test',
    },
    {
      logo: 'https://www.svgrepo.com/show/438912/two-open.svg',
      title: 'Titre 2',
      content: 'contenue test',
    },
    {
      logo: 'https://www.svgrepo.com/show/438900/three-open.svg',
      title: 'Titre 3',
      content: 'contenue test',
    },
    {
      logo: 'https://www.svgrepo.com/show/438575/four-open.svg',
      title: 'Titre 4',
      content: 'contenue test',
    },
    {
      logo: 'https://www.svgrepo.com/show/438539/five-open.svg',
      title: 'Titre 5',
      content: 'contenue test',
    },
    {
      logo: 'https://www.svgrepo.com/show/438849/six-open.svg',
      title: 'Titre 6',
      content: 'contenue test',
    },
  ]; */

  mangas: Manga[] = [
    {
      title: 'Naruto',
      author: 'Masashi Kishimoto',
      genre: 'Shonen',
      volumes: 72,
      published: '1999-2014',
    },
    {
      title: 'One Piece',
      author: 'Eiichiro Oda',
      genre: 'Shonen',
      volumes: 100,
      published: '1997-present',
    },
    {
      title: 'Attack on Titan',
      author: 'Hajime Isayama',
      genre: 'Seinen',
      volumes: 34,
      published: '2009-2021',
    },
    {
      title: 'Death Note',
      author: 'Tsugumi Ohba',
      genre: 'Shonen',
      volumes: 12,
      published: '2003-2006',
    },
    {
      title: 'Fullmetal Alchemist',
      author: 'Hiromu Arakawa',
      genre: 'Shonen',
      volumes: 27,
      published: '2001-2010',
    },
  ];
}
