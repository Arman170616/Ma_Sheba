from django.db import models


class BoardMember(models.Model):
    name = models.CharField(max_length=200)
    designation = models.CharField(max_length=200)
    photo = models.ImageField(upload_to='board/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.name} - {self.designation}"


class Member(models.Model):
    name = models.CharField(max_length=200)
    name_bn = models.CharField(max_length=200)
    designation = models.CharField(max_length=200)
    designation_bn = models.CharField(max_length=200)
    phone = models.CharField(max_length=20)
    photo = models.ImageField(upload_to='members/', blank=True, null=True)
    join_date = models.DateField()
    show_on_site = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.name_bn


class NewsItem(models.Model):
    CATEGORY_CHOICES = [
        ('স্বাস্থ্যসেবা', 'স্বাস্থ্যসেবা'),
        ('প্রশিক্ষণ', 'প্রশিক্ষণ'),
        ('সহায়তা', 'সহায়তা'),
        ('সচেতনতা', 'সচেতনতা'),
        ('প্রতিবেদন', 'প্রতিবেদন'),
        ('অনুষ্ঠান', 'অনুষ্ঠান'),
    ]

    title = models.CharField(max_length=400)
    title_bn = models.CharField(max_length=400)
    content = models.TextField()
    content_bn = models.TextField()
    date = models.DateField()
    category = models.CharField(max_length=100, choices=CATEGORY_CHOICES)
    image = models.ImageField(upload_to='news/', blank=True, null=True)
    published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-date', '-created_at']

    def __str__(self):
        return self.title_bn


class GalleryItem(models.Model):
    MEDIA_CHOICES = [
        ('image', 'ছবি'),
        ('video', 'ভিডিও'),
    ]

    title = models.CharField(max_length=300)
    title_bn = models.CharField(max_length=300)
    media_type = models.CharField(max_length=10, choices=MEDIA_CHOICES, default='image')
    image = models.ImageField(upload_to='gallery/', blank=True, null=True)
    video_url = models.URLField(blank=True, null=True, help_text='YouTube বা অন্য ভিডিও লিংক')
    date = models.DateField()
    published = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', '-date']

    def __str__(self):
        return self.title_bn
