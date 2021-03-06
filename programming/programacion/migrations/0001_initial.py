# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-21 17:16
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Estudiante',
            fields=[
                ('correo', models.CharField(max_length=100)),
                ('password', models.TextField()),
                ('nombre', models.CharField(max_length=50)),
                ('apellido', models.CharField(max_length=50)),
                ('rol', models.CharField(choices=[('R', 'Regular'), ('A', 'Ayudante')], max_length=1)),
                ('score', models.IntegerField()),
                ('matricula', models.CharField(max_length=9, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Noticia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=100)),
                ('descrpcion', models.TextField()),
                ('fecha_publicacion', models.DateTimeField(auto_now_add=True)),
                ('tags', models.CharField(max_length=100)),
                ('img_url', models.CharField(max_length=150)),
                ('estudiante_creador', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='programacion.Estudiante')),
            ],
        ),
        migrations.CreateModel(
            name='Paralelo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('paralelo', models.IntegerField()),
                ('estudiante_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='programacion.Estudiante')),
            ],
        ),
        migrations.CreateModel(
            name='Profesor',
            fields=[
                ('correo', models.CharField(max_length=100)),
                ('password', models.TextField()),
                ('nombre', models.CharField(max_length=50)),
                ('apellido', models.CharField(max_length=50)),
                ('cedula', models.CharField(max_length=10, primary_key=True, serialize=False)),
            ],
        ),
        migrations.AddField(
            model_name='paralelo',
            name='profesor_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='programacion.Profesor'),
        ),
        migrations.AddField(
            model_name='noticia',
            name='profesor_creador',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='programacion.Profesor'),
        ),
    ]
