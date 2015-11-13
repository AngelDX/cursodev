# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.AutoField(serialize=False, auto_created=True, verbose_name='ID', primary_key=True)),
                ('codigo', models.CharField(max_length=60)),
                ('nombre', models.TextField(blank=True, null=True)),
                ('activo', models.BooleanField(default=True)),
                ('fecha', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'verbose_name_plural': 'Categorias',
                'verbose_name': 'Categoria',
            },
        ),
    ]
