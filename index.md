# WelCome Zinntikumugai Infomations

{{ site.data.infomation.name,ja }} | {{ site.data.infomation.name.en }}

# Service
{% for service in site.data.services.list %}
- [{{ service.name }}]({{ service.url | "" }})
{% endfor}