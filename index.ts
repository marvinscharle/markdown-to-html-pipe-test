import 'zone.js';
import 'reflect-metadata';
import {Component} from '@angular/core';
import {MarkdownToHtmlPipe} from 'markdown-to-html-pipe';
import {bootstrap} from '@angular/platform-browser-dynamic';

@Component({
    selector: 'app',
    template: `<div [innerHTML]="markdown|MarkdownToHtml"></div>`,
    pipes: [MarkdownToHtmlPipe]
})
class App {
    public markdown: string = 'This is a **test**! Hello World';
}

bootstrap(App);