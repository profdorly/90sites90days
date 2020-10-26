var CDEditor = function (textarea) {
    this.textarea = textarea;
    
    var textareaSource = null;
    var container = null;
    var toolbar = [];
    var iframe = null;
    
   
    var fonts = ['Arial', 'Calibri', 'Comic Sans MS', 'Impact', 'Trebuchet MS', 'Times New Roman'];
    var sizes = [1, 2, 3, 4, 5, 6, 7];
    var colors = ['#000000', '#333333', '#666666', '#999999', '#CCCCCC', '#FFFFFF',
        '#0000FF', '#00FF00', '#FF0000', '#00FFFF', '#FFFF00', '#FF00FF'
    ];
    var self = this;

    var init = function () {
        textareaSource = document.querySelector(self.textarea);
        textareaSource.style.display = 'none';
        container = textareaSource.parentElement;
        initToolbar(container, toolbar);
        initIframe(container, textareaSource);
    };

    this.save = function () {
        textareaSource.value = CDEditorIframe.document.body.innerHTML;
    };

    var Component = function (commandName, element, event) {
        this.commandName = commandName;
        this.element = document.createElement('li');
        this.element.appendChild(element);
        this.recoverValue = function () {
            return null;
        };

        var selfComponent = this;
        this.element.addEventListener(event, function () {
            CDEditorIframe.document.execCommand(commandName, false, selfComponent.recoverValue());
        });

    };

    var ComponentButton = function (commandName, icon) {
        var button = document.createElement('button');
        var buttonIcon = document.createElement('i');
        buttonIcon.classList.add('fa', 'fa-' + icon);
        button.appendChild(buttonIcon);
        Component.call(this, commandName, button, 'click');
    };

    var ComponentSelect = function (commandName, values) {
        var select = document.createElement('select');
        values.forEach(function (value) {
            var option = document.createElement('option');
            option.value = value;
            option.appendChild(document.createTextNode(value));
            select.appendChild(option);
        });

        Component.call(this, commandName, select, 'change');

        var selfComponentSelect = this;
        this.recoverValue = function () {
            return selfComponentSelect.element.firstChild.value;
        };
    };

    var Space = function () {
        this.element = document.createElement('li');
        this.element.classList.add('space');
        this.element.innerHTML = '&nbsp;';
    };

    var selectedNode = function () {
        return CDEditorIframe.getSelection().anchorNode.parentNode;
    };

    var initToolbar = function (container, toolbar) {
        //HIGNLIGHTER BUTTON
        var highlighter = new ComponentButton('backColor', 'highlighter');
        highlighter.recoverValue = function () {
            return selectedNode().style.backgroundColor === 'yellow' ? 'white' : 'yellow';
        };

        //FONTCOLOR MENU
        var fontColor = new ComponentSelect('forecolor', colors);
        Array.from(fontColor.element.firstChild.options).forEach(function (option) {
            option.style.color = option.value;
        });
        fontColor.element.firstChild.style.color = Array.from(fontColor.element.firstChild.options)[0].value;
        fontColor.recoverValue = function () {
            fontColor.element.firstChild.style.color = fontColor.element.firstChild.value;
            return fontColor.element.firstChild.value;
        };

        // LINK BUTTON
        var link = new ComponentButton('createLink', 'link');
        link.recoverValue = function () {
            return prompt('Entre com o endereço do link:');
        };

        toolbar.push(
            new ComponentSelect('fontname', fonts),
            new ComponentSelect('fontsize', sizes),
            new Space(),
            new ComponentButton('bold', 'bold'),
            new ComponentButton('italic', 'italic'),
            new ComponentButton('underline', 'underline'),
            new ComponentButton('strikethrough', 'strikethrough'),
            new Space(),
            fontColor,
            new Space(),
            highlighter,
            new Space(),
            new ComponentButton('justifyleft', 'align-left'),
            new ComponentButton('justifycenter', 'align-center'),
            new ComponentButton('justifyright', 'align-right'),
            new ComponentButton('justifyfull', 'align-justify'),
            new Space(),
            link,
            new ComponentButton('unlink', 'unlink'),
            new Space(),
            new ComponentButton('insertOrderedList', 'list-ol'),
            new ComponentButton('insertUnorderedList', 'list-ul')
        );

        renderToolbar(container, toolbar);
    };

    var renderToolbar = function (container, toolbar) {
        var list = document.createElement('ul');
        list.classList.add('cd-toolbar');

        toolbar.forEach(function (component) {
            list.appendChild(component.element);
        });

        container.appendChild(list);
    };

    var initIframe = function (container, textareaSource) {
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', 'about:blank');
        iframe.setAttribute('contenteditable', 'true');
        iframe.setAttribute('id', 'CDEditorIframe');
        iframe.setAttribute('name', 'CDEditorIframe');
        iframe.classList.add('cd-editor');

        container.appendChild(iframe);

        CDEditorIframe.document.body.innerHTML = textareaSource.value;
        CDEditorIframe.document.designMode = 'on';
        CDEditorIframe.document.body.style.margin = 0;
        CDEditorIframe.document.body.style.wordWrap = 'break-word';
    };

    init();
};