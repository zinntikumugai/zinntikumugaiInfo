# WelCome Zinntikumugai Infomations

{{ site.data.infomation.name.ja }} | {{ site.data.infomation.name.en }}

# Service

{% for service in site.data.service.list %}
- [ {{ service.name }} ]( {{ service.url | "" }} )
{% endfor %}

# Serviers

{% for serverType in site.data.servers.list %}
## {{ serverType.type }}

{% for server in serverType.list %}
{% if server.invitation == null && server.url == null %}
- {{ server.name }}
{% else %}
- [ {{ server.name}} ]( {{ server.invitation | server.url }} )
{% endif %}
    - Locale：{{ server.locale }}
    - note：{{ server.note }}
    - Servers： {{ server.servsers | size }}
{% for mc in server.servers %}
        - {{ mc.name }}
{% endfor %}

{% endfor %}
{{ serverType }}
{% endfor %}