import 'package:flutter/material.dart';

class CustomDrawer extends Drawer {
  const CustomDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
      ),
    );
  }
}
