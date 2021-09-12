import { Component, OnInit } from '@angular/core';
import { ScriptService } from './scripts.service';
import {ScriptStore} from "./scripts.store";
import * as ace from "ace-builds";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private scriptService: ScriptService) { }

  title = 'markdown-app';

  ngOnInit() {
    console.log("init");
    this.loadScripts()
    this.initAce()
  }

  loadScripts() {
    let allScripts = ""
    ScriptStore.forEach(el => allScripts += `'${el.name}', `)
    console.log(allScripts)
    this.scriptService.load("FCCTests", "aceCore", "themeTwilight", "themeChrome", "modeMarkdown")
  }

  initAce() {
    let editor = ace.edit("editor");
    editor.setTheme("ace/theme/twilight");
    editor.session.setMode("ace/mode/markdown");
    ace.config.set('basePath', 'path')}
}
