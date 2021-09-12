interface Scripts {
    name: string;
    src: string;
} 

export const ScriptStore: Scripts[] = [
    {name: 'FCCTests', src: 'https://api.filestackapi.com/filestack.js'},
    {name: 'aceCore', src: 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.min.js'},
    {name: 'themeTwilight', src: 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/theme-twilight.min.js'},
    {name: 'modeMarkdown', src: 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/mode-markdown.min.js'},
    {name: 'themeChrome', src: 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/theme-chrome.min.js'},
];