import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ScriptService } from './scripts.service';
import * as ace from "ace-builds";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {
  constructor(private scriptService: ScriptService) { }

  title = 'markdown-app';
  content = "<h1>Ace Editor works great in Angular!</h1>"
  @ViewChild("editor") private editor!: ElementRef<HTMLElement>;

  ngOnInit() {
    console.log("init");
    this.loadScripts()
  }

  ngAfterViewInit(): void {
    //How to setup Ace editor in Angular? -> https://blog.shhdharmen.me/how-to-setup-ace-editor-in-angular
    ace.config.set("fontSize", "14px");
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict')
    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.session.setValue(this.content);
    aceEditor.setTheme('ace/theme/twilight');
    aceEditor.session.setMode('ace/mode/markdown');

    aceEditor.on("change", () => {
      this.content = aceEditor.getValue()
    });
  }

  loadScripts() {
    this.scriptService.load("FCCTests")
  }
}
