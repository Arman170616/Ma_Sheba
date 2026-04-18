from django.contrib import admin
from .models import BoardMember, Member, NewsItem, GalleryItem

admin.site.site_header = "মা সেবা সোসাইটি অ্যাডমিন"
admin.site.site_title = "মা সেবা অ্যাডমিন"
admin.site.index_title = "পরিচালনা প্যানেল"


@admin.register(BoardMember)
class BoardMemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'designation', 'order']
    list_editable = ['order']
    ordering = ['order']


@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ['name_bn', 'designation_bn', 'phone', 'join_date', 'show_on_site']
    list_filter = ['show_on_site', 'designation_bn']
    list_editable = ['show_on_site']
    search_fields = ['name_bn', 'name', 'phone']
    date_hierarchy = 'join_date'


@admin.register(NewsItem)
class NewsItemAdmin(admin.ModelAdmin):
    list_display = ['title_bn', 'category', 'date', 'published']
    list_filter = ['published', 'category']
    list_editable = ['published']
    search_fields = ['title_bn', 'title', 'content_bn']
    date_hierarchy = 'date'


@admin.register(GalleryItem)
class GalleryItemAdmin(admin.ModelAdmin):
    list_display = ['title_bn', 'media_type', 'date', 'published', 'order']
    list_filter = ['published', 'media_type']
    list_editable = ['published', 'order']
    search_fields = ['title_bn', 'title']
    date_hierarchy = 'date'
