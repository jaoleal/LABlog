import 'package:flutter/material.dart';
import 'package:lablogfrontend/widgets/asyncbuttons.dart';

class CustomDrawer extends Drawer {
  const CustomDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: [
          asyncButton(
            buttonlabel: "button1",
            goto: Scaffold(),
          ),
        ],
      ),
    );
  }
}
