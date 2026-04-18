import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from api.models import BoardMember, Member, NewsItem
from datetime import date

# Board Members
board_data = [
    ('মো. আবদুল করিম', 'সভাপতি', 1),
    ('ফাহিমা আক্তার', 'সাধারণ সম্পাদক', 2),
    ('নুরুন্নাহার বেগম', 'সহ-সভাপতি', 3),
    ('মো. রফিকুল ইসলাম', 'কোষাধ্যক্ষ', 4),
    ('সালমা খানম', 'সাংগঠনিক সম্পাদক', 5),
    ('মো. জাহাঙ্গীর আলম', 'যুগ্ম সম্পাদক', 6),
    ('রোকেয়া বেগম', 'মহিলা বিষয়ক সম্পাদক', 7),
    ('মো. হাবিবুর রহমান', 'প্রচার ও প্রকাশনা সম্পাদক', 8),
    ('আনোয়ারা বেগম', 'কার্যকরী সদস্য', 9),
    ('মো. শফিকুল ইসলাম', 'কার্যকরী সদস্য', 10),
]
for name, designation, order in board_data:
    BoardMember.objects.get_or_create(name=name, defaults={'designation': designation, 'order': order})

# Members
members_data = [
    ('Fatema Khanam', 'ফাতেমা খানম', 'Volunteer', 'স্বেচ্ছাসেবক', '01711-000001', date(2023, 1, 15), True),
    ('Rashida Begum', 'রাশিদা বেগম', 'Health Worker', 'স্বাস্থ্যকর্মী', '01711-000002', date(2023, 3, 20), True),
    ('Nasrin Akter', 'নাসরিন আক্তার', 'Member', 'সদস্য', '01711-000003', date(2023, 6, 10), False),
]
for name, name_bn, designation, designation_bn, phone, join_date, show_on_site in members_data:
    Member.objects.get_or_create(phone=phone, defaults={
        'name': name, 'name_bn': name_bn,
        'designation': designation, 'designation_bn': designation_bn,
        'join_date': join_date, 'show_on_site': show_on_site,
    })

# News
news_data = [
    ('Ma Seba Provides Free Maternal Health Checkup', 'মা সেবা বিনামূল্যে মাতৃস্বাস্থ্য পরীক্ষা প্রদান করল',
     'Ma Seba Society organized a free maternal health checkup camp in Feni...',
     'মা সেবা সোসাইটি ফেনিতে বিনামূল্যে মাতৃস্বাস্থ্য পরীক্ষা ক্যাম্পের আয়োজন করেছে। এই ক্যাম্পে শতাধিক গর্ভবতী মা উপকৃত হয়েছেন।',
     date(2024, 3, 15), 'স্বাস্থ্যসেবা', True),
    ('New Training Program for Midwives Launched', 'ধাত্রীদের জন্য নতুন প্রশিক্ষণ কার্যক্রম চালু',
     'A new training program has been launched...',
     'মা সেবা সোসাইটি দক্ষ ধাত্রী তৈরির লক্ষ্যে একটি নতুন প্রশিক্ষণ কার্যক্রম চালু করেছে। এই প্রশিক্ষণে ৩০ জন নারী অংশগ্রহণ করছেন।',
     date(2024, 2, 20), 'প্রশিক্ষণ', True),
    ('Nutritional Support Distributed to Poor Mothers', 'দরিদ্র মায়েদের মাঝে পুষ্টি সহায়তা বিতরণ',
     'Nutritional packages distributed...',
     'মা সেবা সোসাইটি ফেনি জেলার দরিদ্র গর্ভবতী ও প্রসূতি মায়েদের মাঝে পুষ্টি সহায়তা প্যাকেজ বিতরণ করেছে।',
     date(2024, 1, 10), 'সহায়তা', True),
    ('Awareness Campaign on Safe Motherhood', 'নিরাপদ মাতৃত্ব বিষয়ে সচেতনতামূলক প্রচারণা',
     'Awareness campaign conducted...',
     'মা সেবা সোসাইটি নিরাপদ মাতৃত্ব নিশ্চিত করতে ব্যাপক সচেতনতামূলক প্রচারণা পরিচালনা করেছে।',
     date(2023, 12, 5), 'সচেতনতা', True),
    ('Annual Report 2023 Released', 'বার্ষিক প্রতিবেদন ২০২৩ প্রকাশিত',
     'Annual report published...',
     'মা সেবা সোসাইটির বার্ষিক প্রতিবেদন ২০২৩ আনুষ্ঠানিকভাবে প্রকাশিত হয়েছে।',
     date(2023, 11, 30), 'প্রতিবেদন', True),
]
for title, title_bn, content, content_bn, news_date, category, published in news_data:
    NewsItem.objects.get_or_create(title_bn=title_bn, defaults={
        'title': title, 'content': content, 'content_bn': content_bn,
        'date': news_date, 'category': category, 'published': published,
    })

print("Seed data loaded successfully!")
