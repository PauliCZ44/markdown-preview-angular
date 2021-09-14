import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ScriptService } from './scripts.service';

import * as ace from "ace-builds";
import * as marked from "marked"
import { starterMarkup } from './starterMarkup';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {
  constructor(private scriptService: ScriptService) {}

  title = 'markdown-app';
  editorContent = starterMarkup
  previewContent = marked(this.editorContent)

  @ViewChild("editor") private editor!: ElementRef<HTMLElement>;
  @ViewChild("preview") private preview!: ElementRef<HTMLElement>;

  ngOnInit() {
    
    console.log("init");
    this.loadScripts()
  }

  ngAfterViewInit(): void {
    //How to setup Ace editor in Angular? -> https://blog.shhdharmen.me/how-to-setup-ace-editor-in-angular
    ace.config.set("fontSize", "14px");
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict')
    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.container.style.lineHeight = "1.44"
    aceEditor.session.setValue(this.editorContent);
    aceEditor.setTheme('ace/theme/twilight');
    aceEditor.session.setMode('ace/mode/markdown');

    this.previewContent = marked(this.editorContent)

    aceEditor.on("change", () => {
      this.editorContent = aceEditor.getValue()
      this.previewContent = marked(this.editorContent)
    });


  }

  loadScripts() {
    this.scriptService.load("FCCTests", "FCCTestss")
  }
}
