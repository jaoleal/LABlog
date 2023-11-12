import 'package:async_button_builder/async_button_builder.dart';
import 'package:flutter/material.dart';

class asyncButton extends StatelessWidget {
  final String buttonlabel;
  final Widget goto;

  const asyncButton({super.key, required this.buttonlabel, required this.goto});

  @override
  Widget build(BuildContext context) {
    return AsyncButtonBuilder(
      child: Padding(
        padding: const EdgeInsets.symmetric(
          horizontal: 16.0,
          vertical: 8.0,
        ),
        child: Text(
          buttonlabel,
          style: TextStyle(color: Colors.white),
        ),
      ),
      loadingWidget: Padding(
        padding: const EdgeInsets.all(8.0),
        child: SizedBox(
          height: 16.0,
          width: 16.0,
          child: CircularProgressIndicator(
            valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
          ),
        ),
      ),
      successWidget: Padding(
        padding: const EdgeInsets.all(4.0),
        child: Icon(
          Icons.check,
          color: Colors.purpleAccent,
        ),
      ),
      onPressed: () async {
        await Future.delayed(Duration(seconds: 2));
      },
      loadingSwitchInCurve: Curves.bounceInOut,
      loadingTransitionBuilder: (child, animation) {
        return SlideTransition(
          position: Tween<Offset>(
            begin: Offset(0, 1.0),
            end: Offset(0, 0),
          ).animate(animation),
          child: child,
        );
      },
      builder: (context, child, callback, state) {
        return Material(
          color: state.maybeWhen(
            success: () => Colors.purple[100],
            orElse: () => Colors.blue,
          ),
          // This prevents the loading indicator showing below the
          // button
          clipBehavior: Clip.hardEdge,
          shape: StadiumBorder(),
          child: InkWell(
            child: child,
            onTap: callback,
          ),
        );
      },
    );
  }
}
