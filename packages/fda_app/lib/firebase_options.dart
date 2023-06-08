// File generated by FlutterFire CLI.
// ignore_for_file: lines_longer_than_80_chars, avoid_classes_with_only_static_members
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

/// Default [FirebaseOptions] for use with your Firebase apps.
///
/// Example:
/// ```dart
/// import 'firebase_options.dart';
/// // ...
/// await Firebase.initializeApp(
///   options: DefaultFirebaseOptions.currentPlatform,
/// );
/// ```
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        return macos;
      case TargetPlatform.windows:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for windows - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyAOhPUHf-4hLUi5dSSQf1ld9hL3mY8NAMw',
    appId: '1:181909110112:web:2d5f82e56235ac7f20f205',
    messagingSenderId: '181909110112',
    projectId: 'cora-app-9b56f',
    authDomain: 'cora-app-9b56f.firebaseapp.com',
    storageBucket: 'cora-app-9b56f.appspot.com',
    measurementId: 'G-L86CJKLWT4',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyCNOAbm2I3SZt2KZDfiv_EqfXBD699izm8',
    appId: '1:181909110112:android:4277dc5838b1e1ed20f205',
    messagingSenderId: '181909110112',
    projectId: 'cora-app-9b56f',
    storageBucket: 'cora-app-9b56f.appspot.com',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyDYcVdRq2NmHBGVpnJ2qaRs9yCM4mV0k84',
    appId: '1:181909110112:ios:60fe00717356019720f205',
    messagingSenderId: '181909110112',
    projectId: 'cora-app-9b56f',
    storageBucket: 'cora-app-9b56f.appspot.com',
    androidClientId: '181909110112-0tajb086utqggvhf1korignnafdsmmj3.apps.googleusercontent.com',
    iosClientId: '181909110112-k55mcrh2g3knn63v09hbkv9dv06kgj58.apps.googleusercontent.com',
    iosBundleId: 'com.example.fdaApp',
  );

  static const FirebaseOptions macos = FirebaseOptions(
    apiKey: 'AIzaSyDYcVdRq2NmHBGVpnJ2qaRs9yCM4mV0k84',
    appId: '1:181909110112:ios:60fe00717356019720f205',
    messagingSenderId: '181909110112',
    projectId: 'cora-app-9b56f',
    storageBucket: 'cora-app-9b56f.appspot.com',
    androidClientId: '181909110112-0tajb086utqggvhf1korignnafdsmmj3.apps.googleusercontent.com',
    iosClientId: '181909110112-k55mcrh2g3knn63v09hbkv9dv06kgj58.apps.googleusercontent.com',
    iosBundleId: 'com.example.fdaApp',
  );
}