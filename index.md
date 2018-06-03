# WelCome Zinntikumugai Infomations

{{ site.data.infomation.name.ja }} | {{ site.data.infomation.name.en }}

# Service

{% for service in site.data.service.list %}
- [ {{ service.name }} ]( {{ service.url | "" }} )
{% endfor %}

# Serviers

{% for server in site.data.servers.list %}
## {{ server.type }}
{$ for s in server.list %}
### {{ s.name }}
{% for sl in s.servers %}
- {{ sl.name }}
{% endfor %}
{% endfor %}
{% endfor %}
